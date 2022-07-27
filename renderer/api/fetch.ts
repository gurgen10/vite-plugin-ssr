import { ref, isRef, unref, watchEffect } from 'vue'
import { getAxiosInstance } from './getAxiosInstance'

export function useFetch(url: string) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null
    // unref() unwraps potential refs

    const axios = getAxiosInstance()
    setTimeout(() => {
      axios.get(unref(url))
      .then((res) => {
        loading.value = false
        return data.value = res.data
      })
      .catch((err) => {
        loading.value = false
        return error.value = err
      })
    },2000)

  }  

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch()
  }

  return { data, error, loading }
}