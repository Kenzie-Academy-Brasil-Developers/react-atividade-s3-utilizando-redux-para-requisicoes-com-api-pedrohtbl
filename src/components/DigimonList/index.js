import { useSelector } from "react-redux"

const DigimonList = () =>{
    const { digimons } = useSelector(state => state)

    return(
        <>
        <div>
            <ul>
                {digimons.map((digimon,index) =>
                    <li key={index}>
                        {console.log(digimons)}
                        <p>{digimon.name}</p>
                        <img src={digimon.img} alt={digimon.name}/>
                        <p>{digimon.level}</p>
                    </li>
                )}
            </ul>
        </div>
        </>
    )
}

export default DigimonList