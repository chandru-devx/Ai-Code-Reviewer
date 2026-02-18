import { create } from "zustand";

export const useReviewStore = create((set) => ({
  code: "",
  language: "javascript",
  result: "",
  loading: false,
  error: null,

  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
  setResult: (result) => set({ result }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
