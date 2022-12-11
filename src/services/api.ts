import axios from "axios";
import { Entity } from "./atoms";

export const getData: () => Promise<Entity[]> = async () => {
    const result = await axios(
        'https://api.llama.fi/protocols',
    );

    return result?.data?.filter((entity: Entity) => entity.category !== 'CEX')
        .slice(0,80)
        .map((entity: Entity) => ({
        name: entity.name,
        symbol: entity.symbol,
        tvl: entity.tvl,
        logo: entity.logo,
    })) || [];
}