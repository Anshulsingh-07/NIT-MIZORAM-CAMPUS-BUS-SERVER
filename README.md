

## Caretaker Accounts And Password Recovery

On startup, the backend creates a caretaker account for each configured hostel when it does not exist, using `CARETAKER_INITIAL_PASSWORD`. Set this to a 9-128 character secret; there is no default password. New accounts and accounts migrated from legacy plaintext passwords must change their password after login. Existing bcrypt passwords are not overwritten.

Set `CARETAKER_RECOVERY_EMAILS` as comma-separated hostel/email pairs, for example `BH1:caretaker-bh1@example.com,GH1:caretaker-gh1@example.com`. Password reset links are sent to the configured recovery email, or to the account email when no recovery address is set.

Password recovery requires `MAIL_FROM` and either `BREVO_API_KEY` or `RESEND_API_KEY`. Set `PUBLIC_BASE_URL` to the public HTTPS origin used in reset links, such as the Render service URL. The reset link expires after 30 minutes and can only be used once. In development without a mail provider, the reset link is written to the server log; production returns the configured-mailer-unavailable response instead.
