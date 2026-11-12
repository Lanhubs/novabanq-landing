// The landing page's only outbound call: joining the launch waitlist.
//
// This module exists so the form has one place that knows where a
// signup goes and what the API's envelope means. Everything here is
// deliberately unframed — no query library, no request wrapper —
// because this is the first and only request the page makes.

// Where submissions go. Kept as a constant rather than an env var so a
// reader of the form knows exactly which backend a signup lands on.
// The test instance is https://novabanq-api-5w9p.onrender.com/api/v1.
export const API_BASE_URL = "https://novabanq-api.onrender.com/api/v1"

// Client-side-only code for a request that never reached the API — a
// blocked origin, an offline visitor. The backend never returns it, so
// it is deliberately not one of the server's ErrorCode values.
export const NETWORK_ERROR = "NETWORK_ERROR"

/** The fields the waitlist form collects, in the API's snake_case. */
export type WaitlistSignup = {
    full_name: string
    email: string
    phone?: string
}

/** An API failure with the envelope's `error.code` attached. */
export class WaitlistApiError extends Error {
    code: string

    constructor(code: string, message: string) {
        super(message)
        this.name = "WaitlistApiError"
        this.code = code
    }
}

type Envelope = {
    success?: boolean
    error?: { code?: string; message?: string }
} | null

/**
 * Post a signup to `POST /api/v1/waitlist`.
 *
 * Resolves once the API confirms the row. Throws `WaitlistApiError`
 * otherwise — including for an address that is already on the list,
 * which arrives as a 409 with code `WAITLIST_EMAIL_EXISTS` and is a
 * outcome to tell the visitor about, not a bug.
 */
export const joinWaitlist = async (signup: WaitlistSignup): Promise<void> => {
    let response: Response
    let envelope: Envelope

    try {
        response = await fetch(`${API_BASE_URL}/waitlist`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signup),
        })
        // A proxy can answer with HTML instead of the envelope, so a
        // failed parse is tolerated and handled as a missing code.
        envelope = (await response.json().catch(() => null)) as Envelope
    } catch {
        throw new WaitlistApiError(NETWORK_ERROR, "The request could not be sent.")
    }

    if (response.ok) {
        if (envelope?.success !== true) {
            throw new WaitlistApiError("INTERNAL_ERROR", "The signup could not be confirmed.")
        }
        return
    }

    throw new WaitlistApiError(
        envelope?.error?.code ?? NETWORK_ERROR,
        envelope?.error?.message ?? "The signup could not be sent.",
    )
}
