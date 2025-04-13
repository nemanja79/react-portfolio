import AnimatedLetters from "../AnimatedLetters"

const CopyrightLetters = ({ letterClass, companyName, idx }) => {

    const copyright = String.fromCodePoint(0x02122);
    const companyString = `${companyName}${copyright} `;
    const strArray = companyString.split('');

    return (
        <AnimatedLetters letterClass={letterClass}
            strArray={strArray}
            idx={idx} />
    )

}

export default CopyrightLetters