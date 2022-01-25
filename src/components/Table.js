import React from "react";
import TableRow from './TableRow';


const Table = ({ pokedex }) => {
    return (
        <tbody>
            {
                pokedex.map((user,i) => {
                    return (
                        <TableRow 
                            key={i}
                            id={pokedex[i].id}
                            num={pokedex[i].num}
                            name={pokedex[i].name}
                            img={pokedex[i].img}
                            type={pokedex[i].type.join(', ')}
                            weaknesses={pokedex[i].weaknesses.join(', ')}
                            height={pokedex[i].height}
                            weight={pokedex[i].weight}
                            nextEvolution={!pokedex[i].next_evolution ? 
                                pokedex[i].name + ' is the final Evolution' : 
                                pokedex[i].next_evolution.map((user, i) => {
                                    return user.name;
                                })}
                            prevEvolution={!pokedex[i].prev_evolution ? 
                                pokedex[i].name + ' is the base Pokémon' : 
                                pokedex[i].prev_evolution.map((user, i) => {
                                    return user.name;
                                })}
                        />
                    );
                })
            }
        </tbody>
    )
} 

export default Table;