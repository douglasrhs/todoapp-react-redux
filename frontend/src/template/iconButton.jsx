import React from 'react'
import If from './if'

export default props => (
    //renderização condicional a partir do props.hide
    <If test={!props.hide}>
            <button className={'btn btn-'+props.style}
                onClick={props.onClick}>
                <i className={'fa fa-'+ props.icon}></i>
            </button>
     </If>
)