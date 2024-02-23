/* eslint-disable prettier/prettier */
export interface Insurance {
    _id?: string; // campo opcional para el identificador único generado por MongoDB
    title: string;
    description: string;
    completed: boolean;
    image?: string; // campo opcional para la ruta de la imagen
  }