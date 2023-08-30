import { Navigator } from '../../components/navigator/Navigator'
import { Container } from '../../components/container/Container'
import { useAtom } from 'jotai'
import { website } from '../../atoms'

export const Menu = () => {
  const [websiteAtom] = useAtom(website)

  return (
    <main className='w-full min-h-screen'>
      <Container website={websiteAtom}/>
      <Navigator />
    </main>
  )
}
