import BugIcon from '../components/Icons/BugIcon';
import DarkIcon from '../components/Icons/DarkIcon';
import DragonIcon from '../components/Icons/DragonIcon';
import ElectricIcon from '../components/Icons/ElectricIcon';
import FairyIcon from '../components/Icons/FairyIcon';
import FightingIcon from '../components/Icons/FightingIcon';
import FireIcon from '../components/Icons/FireIcon';
import FlyingIcon from '../components/Icons/FlyingIcon';
import GhostIcon from '../components/Icons/GhostIcon';
import GrassIcon from '../components/Icons/GrassIcon';
import GroundIcon from '../components/Icons/GroundIcon';
import IceIcon from '../components/Icons/IceIcon';
import NormalIcon from '../components/Icons/NormalIcon';
import PoisonIcon from '../components/Icons/PoisonIcon';
import PsychicIcon from '../components/Icons/PsychicIcon';
import RockIcon from '../components/Icons/RockIcon';
import SteelIcon from '../components/Icons/SteelIcon';
import WaterIcon from '../components/Icons/WaterIcon';

const pokemonIcons = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon,
};

export const getIconByType = (typeName) => {
  const Component = pokemonIcons[typeName];
  return <Component />;
};

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
