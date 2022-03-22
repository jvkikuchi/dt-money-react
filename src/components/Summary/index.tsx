import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt='Income'/>
        </header>
        <strong>$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt='Outcome'/>
        </header>
        <strong>- $ 550,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt='Total'/>
        </header>
        <strong>$ 500,00</strong>
      </div>
    </Container>
  )
}