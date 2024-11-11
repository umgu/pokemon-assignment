import React from 'react';

const colors = {
    Normal: '#929da3',
    Fighting: '#ce416b',
    Flying: '#8fa9de',
    Poison: '#aa6bc8',
    Ground: '#d97845',
    Rock: '#c5b78c',
    Bug: '#91c12f',
    Ghost: '#5269ad',
    Steel: '#5a8ea2',
    Fire: '#ff9d55',
    Water: '#5090d6',
    Grass: '#63bc5a',
    Electric: '#f4d23c',
    Psychic: '#fa7179',
    Ice: '#73cec0',
    Dragon: '#0b6dc3',
    Dark: '#5a5465',
    Fairy: '#ec8fe6',
    Physical: '#ea551e',
    Special: '#1c4684',
    Status: '#999999',
}

const PokemonCard = (props) => {
    const { detail } = props;
    const types = detail.type;
    const color = colors[types[0]];

    return (
        <div className='col-12 col-sm-6 col-xl-3 p-3'>
            <div className='pokemon-card card shadow' style={{ backgroundColor: color }}>
                <h3 className="pokemon-id text-white">#{String(detail.id).padStart(3, '0')}</h3>
                <img className="pokemon-image" src={detail.image.hires} alt={detail.name?.english} />
                <div className='pokemon-info'>
                    <h4 className='pokemon-name' style={{ color: color }}>{detail.name?.english}</h4>
                    <div className='d-flex gap-2 justify-content-center'>
                        {types.map((type) => {
                            return (
                                <div className='type-label' style={{ backgroundColor: colors[type] }} key={type}>{type}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
