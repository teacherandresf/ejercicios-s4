import { Text, View } from "react-native";

const tareasIniciales = [
  { id: 1, texto: "tarea 1" },
  { id: 2, texto: "tarea 2" },
  { id: 3, texto: "tarea 3" },
];

export function Tarea({ tarea }) {
  return (
    <View>
      <Text>{tarea.texto}</Text>
    </View>
  );
}

export function Tareas({ tareas }) {
  return (
    <View>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </View>
  );
}

export default function App() {
  return (
    <View>
      <Text>Estamos en la sesión 5</Text>
      <Tareas tareas={tareasIniciales} />
    </View>
  );
}
