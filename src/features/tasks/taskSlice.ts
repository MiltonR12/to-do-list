import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { nowDate } from "../../utils/funtion";

type Init = {
  taskVisible: string;
  tasks: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createAt: string;
  }[];
};

const initialState: Init = {
  taskVisible: "",
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        ...state.tasks,
        {
          ...action.payload,
          completed: false,
          id: uuid(),
          createAt: nowDate(),
        },
      ];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        const tasks = state.tasks.filter((item) => item.id !== task.id);
        state.tasks = [
          ...tasks,
          {
            title: action.payload.title,
            description: action.payload.description,
            completed: task.completed,
            id: task.id,
            createAt: task.createAt,
          },
        ];
      }
    },
    updateCompleted: (state, action) => {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    setVisible: (state, actions) => {
      state.taskVisible = actions.payload;
    },
  },
});

export default taskSlice.reducer;

export const { addTask, setVisible, deleteTask, updateTask, updateCompleted } =
  taskSlice.actions;
