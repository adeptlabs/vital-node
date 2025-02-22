# Vital Node Library

[![npm shield](https://img.shields.io/npm/v/@tryvital/vital-node)](https://www.npmjs.com/package/@tryvital/vital-node)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Vital Node.js library provides access to the Vital API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.tryvital.io/home/welcome).

## Installation

```
npm install --save @tryvital/vital-node
# or
yarn add @tryvital/vital-node
```

## Usage
```typescript
import { VitalClient, VitalEnvironment } from '@tryvital/vital-node';

const vital = new VitalClient({
    apiKey: 'YOUR_API_KEY',
});

const labTest = await vital.labTests.get('order-id');

console.log('Received lab test', labTest);
```

## Handling Errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [VitalError](./src/errors/VitalError.ts) will be thrown:

```ts
try {
  await vital.labTests.get('order-id');
} catch (err) {
  if (err instanceof VitalError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body);
  }
}
```

## Environments

When you sign up to Vital you get access to two environments, Sandbox and Production.

| Environment URLs |                                    |
| ---------------- | ---------------------------------- |
| `production`     | api.tryvital.io                    |
| `production-eu`  | api.eu.tryvital.io                 |
| `sandbox`        | api.sandbox.tryvital.io            |
| `sandbox-eu`     | api.sandbox.eu.tryvital.io         |

By default, the SDK uses the `production` environment. See the snippet below 
for an example on how ot change the environment. 

```ts
import { VitalClient, VitalEnvironment } from '@tryvital/vital-node';

const vital = new VitalClient({
    apiKey: 'YOUR_API_KEY',
    environment: VitalEnvironment.Sandbox,
});
```

## Request Options

Each method in the SDK accepts an additional optional parameter where
you can specify request options such as a timeout. 

```ts
const labTest = await vital.labTests.get('order-id', {
    timeoutInSeconds: 40 // wait 40 seconds for this call
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
