import axios from 'axios';
import { IAnimal } from '../models/IAnimal';

export const fetchAnimals = async (): Promise<IAnimal[]> => {
  try {
    const response = await axios.get("https://animals.azurewebsites.net/api/animals");
    return response.data;
  } catch (error) {
    console.error("Ett fel har uppstått");
    return [];
  }
};