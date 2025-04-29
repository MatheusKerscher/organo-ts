import type { ReactNode } from 'react'

import './Botao.css'

type BotaoProps = {
    children: ReactNode
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao