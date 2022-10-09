import getQuery from 'app/hooks/useRouter/getQuery'
import pushUrl from 'app/hooks/useRouter/pushUrl'
import replaceUrl from 'app/hooks/useRouter/replaceUrl'

const useRouter = () => {
  // TODO errorhandling
  const pathname = window.location.pathname

  const query = getQuery()

  const push = (url: string) => pushUrl(url)

  const replace = (url: string) => replaceUrl(url)

  return {
    pathname,
    query,
    push,
    replace
  }
}

export default useRouter
