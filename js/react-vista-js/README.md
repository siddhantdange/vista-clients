
# Vista-powered React Components

React components that help dynamically adjust UI based on permissions checks.

## Reference

- [Vista API Documentation](https://docs.govista.io/api/)

## Prerequisites

You'll need to use the ephemeral token generated by our API.

## Usage

Install the dependency:

```
npm install @vista.io/react-vista-js;
```

Then in your Node application:

```js
import { VistaCheck } from '@vista.io/react-vista-js';

<VistaCheck
        token="Z6Q2KfVk6T5NJ65uskrfOxRCkcrSMhxQRmbAereoxUQ2YA7J" // generated from API
        user_id={user_id}
        action={action}
        resource_type={resource_type}
        resource_id={resource_id}
        branch="test"

        // optional
        denyComponent={<React.Fragment />} // rendered if permission denied
        handleError={(err) => console.log(err)}>
            <WrappedComponent></WrappedComponent>
    </VistaCheck>);
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.