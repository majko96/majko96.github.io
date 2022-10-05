import React from 'react';
import Style from "../about/About.module.scss";
import Terminal from "../about/Terminal";

function PortfolioBlock(props) {
    const {name, url, desc, tech, source, isDarkMode} = props;
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
                            {
                                source && <a href={source} target={'_blank'} rel={'noreferrer'}>source: 🔗 GitHub</a>
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