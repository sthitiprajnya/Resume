import { create } from 'zustand';

interface AudioState {
  isMuted: boolean;
  toggleMute: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isMuted: false, // Default unmuted for full cinematic experience, though browsers might require interaction
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));
