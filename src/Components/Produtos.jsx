import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import Loading from './Loading/Loading'
import styles from './Produtos.module.css'

const Produto = () => {
  const [produtos, setProdutos] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [erro, setErro] = React.useState(null)

  React.useEffect(() => {
    async function fetchProduto(url) {
      setLoading(true)
      try {
        const response = await fetch(url)
        const json = await response.json()
        setProdutos(json)
      } catch(error) {
          setErro('Um error ocorreu')
      } finally {
          setLoading(false)
      }
    }
    fetchProduto('https://ranekapi.origamid.dev/json/api/produto')
  }, [])

  if(erro) return <p>{erro}</p>
  if(loading) return <Loading />
  if(produtos === null) return null
  return (
    <section className={styles.produtos + ' animeProdutos'}>
      <Head title='Produtos' />
      {produtos.map((produto) => (
          <div className={styles.item} key={produto.id} >
            <Link to={`produto/${produto.id}`} className={styles.link}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} className={styles.img} />
             <h1 className={styles.h1}>{produto.nome}</h1>
            </Link>
          </div>
      ))}
    </section>
  )
}

export default Produto
