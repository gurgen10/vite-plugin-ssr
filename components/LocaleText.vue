<template>
<span>{{textLocalized}}</span>

</template>

<script lang="ts" setup>
// https://github.com/brillout/vite-plugin-ssr/tree/main/examples/i18n
import { ref, onMounted, onUpdated } from "vue"
import { usePageContext } from '../renderer/usePageContext'
import { translate } from '../locales'
const props = defineProps(['text'])
let textLocalized = ref("")

const pageContext = usePageContext()
const { locale } = pageContext

textLocalized.value = translate(props.text, locale)
</script>
