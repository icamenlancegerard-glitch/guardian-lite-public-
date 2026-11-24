# Independent Testing Readiness and Evidence Register

**Current status: Documentation handoff prepared. Runnable implementation package not verified in this public repository.**

This register deliberately distinguishes documented intent from demonstrated behavior.

| Deliverable | Status | Evidence required to change status |
|---|---|---|
| Public reviewer entry point | Prepared | Public URL and content review |
| Scope and trust boundaries | Documented | Architecture owner review |
| Rules of engagement | Documented | Owner approval and contact path |
| Adversarial test plan | Test design documented | Executed test logs tied to exact commit |
| Finding template | Prepared | Reviewer usability check |
| Runnable Docker sandbox | Not verified / not supplied here | Reproducible build and run from clean environment |
| Synthetic protected service | Not verified / not supplied here | Demonstrated service-side rejection and state checks |
| Automated adversarial suite | Not verified / not supplied here | Test source, exact command, complete output |
| CI results | Not asserted | Public CI run URL and commit SHA |
| Release checksum / provenance | Not supplied | Versioned artifact and independently reproducible checksum |
| Cleanup procedure | Not verified | Tested teardown and state-cleanup evidence |
| Security contact / disclosure channel | Must be confirmed by owner | Monitored contact published by owner |

## Release gate

Do not announce an open technical testing program until all of the following are true:

- A specific implementation commit or tagged release is identified.
- Reviewers can obtain the permitted test artifact without private credentials.
- Setup and teardown work from a clean environment.
- The sandbox contains only synthetic data and isolated services.
- At least one end-to-end denial test proves no protected side effect occurs.
- At least one authorized test proves the intended path works.
- The adversarial suite has reproducible output and clear pass/fail semantics.
- Known limitations and unsupported scenarios are published.
- A monitored vulnerability-reporting contact is published.
- The owner has reviewed the exact release and approved the scope.

## Update discipline

Every status change must link to evidence. Never convert "planned", "documented", or "implemented" into "tested", "verified", or "production-ready" without the corresponding proof.
