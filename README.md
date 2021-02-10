# eve-icons ![Unit Tests](https://github.com/Eveio/icons/workflows/Unit%20Tests/badge.svg) 

The SVG icon set used by eve's front-end application as Vue components. See the list of the icons [here](https://eve-icons.netlify.app/).

## Installation

```bash
yarn add @eveio/icons

# Install Vue as a peer dependency
yarn add vue@2.6
```

## Usage

Import and use the components from `@eveio/icons`. You can find the list of the icons and their names [here](https://eve-icons.netlify.app/).

```vue
<template>
  <div>
    <IconAccreditation/>
  </div>
</template>

<script>
import { IconAccreditation } from '@eveio/icons'

export default {
  components: {
    IconAccreditation
  }
}
</script>
```

The icon components support several sizes via the `class` attribute:

* `<IconAccreditation/>`: `width: 20px; height: 20px`
* `<IconAccreditation class="icon-xs"/>`: `width: 16px; height: 16px`
* `<IconAccreditation class="icon-m"/>`: `width: 40px; height: 40px`
* `<IconAccreditation class="icon-l"/>`: `width: 64px; height: 64px`
* `<IconAccreditation class="icon-xl"/>`: `width: 96px; height: 96px`
* `<IconAccreditation class="icon-xxl"/>`: `width: 128px; height: 128px`

Any extra custom class will fall through to the component's root `<svg>` tag.

## Development

```bash
yarn install  # install the dependencies
yarn build    # build the components
yarn demo     # build the demo icon-listing page
yarn test     # run the test suite
```

## License

MIT
