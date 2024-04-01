import React from 'react';
import Style from "../about/About.module.scss";
import Terminal from "../about/Terminal";

function PortfolioBlock(props) {
    console.log(props)
    const {name, url, desc, tech, source, isDarkMode} = props;

    const renderSource = () => {
        if (props.source === 'personal') {
            return (
                <>
                    source: contact me
                </>
            )
        }
        return (
            <>
                {
                    source && <a href={source} target={'_blank'} rel={'noreferrer'}>source: 🔗 GitHub</a>
                }
            </>
        )
    }
    const renderItemText = () => {
        return (
            <>
                <p><span className={Style.green}>mario@mbpc:~$</span> cat {name}</p>
                <ul className={Style.contact}>
                    <li>
                        <a href={url} target={'_blank'} rel={'noreferrer'}>url: 🔗 {name}</a>
                    </li>
                    <li>
                        desc: 📚 {desc}
                    </li>
                    <li>
                        tech: ✅ {tech}
                    </li>
                    <li>
                        {renderSource()}
                    </li>
                    <li>
                        {props.login &&
                            <>
                                login: {props.login}
                            </>
                        }
                    </li>
                    <li>
                        {props.password &&
                            <>
                                password: {props.password}
                            </>
                        }
                    </li>
                </ul>
            </>
        )
    }

    return (
        <Terminal text={renderItemText()} isDarkMode={isDarkMode}/>
    )
}

export default PortfolioBlock;
