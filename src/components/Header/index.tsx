import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt='dt money'/>
        <button type='button'>
          New transaction
        </button>
      </Content>
    </Container>
  )
}