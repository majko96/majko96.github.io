import React from 'react';
import Terminal from "../../components/Terminal/Terminal";
import { useTranslation } from 'react-i18next';

function PortfolioBlock(props) {
    const {name, url, desc, tech, source, isDarkMode} = props;
    const { t, i18n } = useTranslation();

    const renderSource = () => {
        if (props.source === 'personal') {
            return (
                <>
                    {t('source')}: contact me
                </>
            )
        }
        return (
            <>
                {
                    source && <a href={source} target={'_blank'} rel={'noreferrer'}>{t('source')}: 🔗 GitHub</a>
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
                        {t('desc')}: 📝 {desc}
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
                                {t('login')}: {props.login}
                            </>
                        }
                    </li>
                    <li>
                        {props.password &&
                            <>
                                {t('password')}: {props.password}
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
