# PollyScript

PollyScript is a JavaScript resilience and transient-fault-handling library that allows developers to express policies such as Retry, Circuit Breaker, Timeout, Bulkhead Isolation, and Fallback in a fluent and thread-safe manner. PollyScript is a port of the [Polly](https://github.com/App-vNext/Polly) library from .NET. 

## Install

```
$ npm install @the-pat/pollyscript
```

## Resilience Policies (TODO)

PollyScript aims to offer the same resilience policies as [Polly](https://github.com/App-vNext/Polly#resilience-policies).

|Policy| Premise | Aka| How does the policy mitigate?|
| ------------- | ------------- |:-------------: |------------- |
|**Retry** <br/>(policy family)<br/><sub>([quickstart](#retry)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Retry))</sub>|Many faults are transient and may self-correct after a short delay.| "Maybe it's just a blip" |  Allows configuring automatic retries. |
|**Circuit-breaker**<br/>(policy family)<br/><sub>([quickstart](#circuit-breaker)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Circuit-Breaker))</sub>|When a system is seriously struggling, failing fast is better than making users/callers wait.  <br/><br/>Protecting a faulting system from overload can help it recover. | "Stop doing it if it hurts" <br/><br/>"Give that system a break" | Breaks the circuit (blocks executions) for a period, when faults exceed some pre-configured threshold. | 
|**Timeout**<br/><sub>([quickstart](#timeout)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Timeout))</sub>|Beyond a certain wait, a success result is unlikely.| "Don't wait forever"  |Guarantees the caller won't have to wait beyond the timeout. | 
|**Bulkhead Isolation**<br/><sub>([quickstart](#bulkhead)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Bulkhead))</sub>|When a process faults, multiple failing calls backing up can easily swamp resource (eg threads/CPU) in a host.<br/><br/>A faulting downstream system can also cause 'backed-up' failing calls upstream.<br/><br/>Both risk a faulting process bringing down a wider system. | "One fault shouldn't sink the whole ship"  |Constrains the governed actions to a fixed-size resource pool, isolating their potential  to affect others. |
|**Cache**<br/><sub>([quickstart](#cache)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Cache))</sub>|Some proportion of requests may be similar.| "You've asked that one before"  |Provides a response from cache if known. <br/><br/>Stores responses automatically in cache, when first retrieved. |
|**Fallback**<br/><sub>([quickstart](#fallback)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/Fallback))</sub>|Things will still fail - plan what you will do when that happens.| "Degrade gracefully"  |Defines an alternative value to be returned (or action to be executed) on failure. | 
|**PolicyWrap**<br/><sub>([quickstart](#policywrap)&nbsp;;&nbsp;[deep](https://github.com/App-vNext/Polly/wiki/PolicyWrap))</sub>|Different faults require different strategies; resilience means using a combination.| "Defence in depth"  |Allows any of the above policies to be combined flexibly. | 