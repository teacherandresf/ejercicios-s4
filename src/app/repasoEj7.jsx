import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const listadoCancionesOriganl = [
  { id: 1, nombre: "Canción 1", favorito: false },
  { id: 2, nombre: "Canción 2", favorito: false },
  { id: 3, nombre: "Canción 3", favorito: true },
];
let contador = listadoCancionesOriganl.length + 1;

export default function App() {
  const [cancion, setCancion] = useState("");
  const [listadoCanciones, setListadoCanciones] = useState(
    listadoCancionesOriganl,
  );
  const vacio = cancion.trim() === "";

  const agregarCancion = () => {
    setListadoCanciones([
      ...listadoCanciones,
      {
        id: contador++,
        nombre: cancion,
        favorito: false,
      },
    ]);
    setCancion("");
  };

  const borrarCancion = (idBorrar) => {
    setListadoCanciones(
      listadoCanciones.filter((cancion) => cancion.id !== idBorrar),
    );
  };

  const alternarFavorito = (idFavorito) => {
    setListadoCanciones(
      listadoCanciones.map((cancion) => {
        if (cancion.id === idFavorito) {
          return { ...cancion, favorito: !cancion.favorito };
        } else {
          return cancion;
        }
      }),
    );
  };

  const alternaFavoritoReducido = (idFavorito) => {
    setListadoCanciones(
      listadoCanciones.map((cancion) =>
        cancion.id === idFavorito
          ? { ...cancion, favorito: !cancion.favorito }
          : cancion,
      ),
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Escribe una canción"
        value={cancion}
        onChangeText={setCancion}
      />
      <Button disabled={vacio} title="Agregar" onPress={agregarCancion} />
      <Text>Total de canciones: {listadoCanciones.length}</Text>
      {listadoCanciones.map((cancion) => (
        <View key={cancion.id}>
          <Text>{cancion.nombre}</Text>
          <Pressable onPress={() => alternarFavorito(cancion.id)}>
            <Text>{cancion.favorito ? "★" : "☆"}</Text>
          </Pressable>
          <Pressable onPress={() => borrarCancion(cancion.id)}>
            <Text>Borrar</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
