import React from 'react';
import Terminal from "../../components/Terminal/Terminal";

function PortfolioBlock(props) {
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
                <ul className={'terminal-text'}>
                    <li>
                        <a href={url} target={'_blank'} rel={'noreferrer'}>url: 🔗 {name}</a>
                    </li>
                    <li>
                        desc: 📝 {desc}
                    </li>
                    <li>
                        tech: 🖥️ {tech}
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
        <Terminal text={renderItemText()} isDarkMode={isDarkMode} pcText={'cat ' + name}/>
    )
}

export default PortfolioBlock;
