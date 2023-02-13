import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading/Loading'
import styles from './Produto.module.css'

const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [loading , setLoading] = React.useState(false)
    const [erro, setErro] = React.useState(null)

    const {id} = useParams()

    React.useEffect(() => {
        setLoading(true)
        async function fetchProduto(url) {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch(error) {
                setErro('Um error ocorreu')
            } finally {
                setLoading(false)
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

  if(erro) return <p>{erro}</p>  
  if(loading) return <Loading />
  if(produto === null) return null  
  return (
    <section className={styles.container}>
        <div className={styles.imgProduto}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </div>
        <div className={styles.descricao} >
            <h1>{produto.nome}</h1>
            <p className={styles.preco}>R$ {produto.preco}</p>
            <p className={styles.pDescricao}>{produto.descricao}</p>
        </div>
    </section>
  )
}

export default Produto
