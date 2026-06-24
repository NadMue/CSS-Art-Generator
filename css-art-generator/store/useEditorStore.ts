import {create} from 'zustand';

export interface Layer {
  id: string;
  name: string;
  type: 'circle' | 'square' | 'rectangle' | 'triangle' | 'polygon';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  borderRadius?: string;
}

interface EditorState {
  layers: Layer[];
  selectedLayerId: string | null;
  addLayer: (type: 'circle' | 'square' | 'rectangle' | 'triangle' | 'polygon') => void;
  selectLayer: (id: string | null) => void;
  updateLayer: (id: string, updates: Partial<Layer>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  layers: [],
  selectedLayerId: null,
  addLayer: (type) => {
    const names = {
      circle: 'Circle',
      square: 'Square',
      rectangle: 'Rectangle',
      triangle: 'Triangle',
      polygon: 'Polygon',
    };

    const newLayer: Layer = {
      id: Math.random().toString(36).substring(2, 9),
      name: `Layer ${names[type]}`,
      type,
      x: 50,
      y: 50,
      width: type === 'rectangle' ? 150 : 100,
      height: 100,
      color: '#ec4899', // pink-500
      borderRadius: type === 'circle' ? '50%' : '0%',
    };
    set((state) => ({ layers: [...state.layers, newLayer], selectedLayerId: newLayer.id }));
  },
  selectLayer: (id) => set({ selectedLayerId: id }),
  updateLayer: (id, updates) =>
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, ...updates } : l)),
    })),
}));
