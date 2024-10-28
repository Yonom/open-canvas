"use client";

import LLMIcon from "./icons/svg/LLMIcon.svg";
import NextImage from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ALL_MODEL_NAMES,
  ANTHROPIC_MODELS,
  OPENAI_MODELS,
  FIREWORKS_MODELS,
  GEMINI_MODELS,
} from "@/constants";

const allModels = [
  ...ANTHROPIC_MODELS,
  ...OPENAI_MODELS,
  ...FIREWORKS_MODELS,
  ...GEMINI_MODELS,
];

const modelNameToLabel = (modelName: ALL_MODEL_NAMES) => {
  const model = allModels.find((m) => m.name === modelName);
  return model?.label ?? modelName;
};

interface ModelSelectorProps {
  model: ALL_MODEL_NAMES;
  setModel: React.Dispatch<React.SetStateAction<ALL_MODEL_NAMES>>;
}

export default function ModelSelector({ model, setModel }: ModelSelectorProps) {
  const handleModelChange = async (newModel: ALL_MODEL_NAMES) => {
    // Create a new thread with the new model
    setModel(newModel);
  };

  return (
    <Select value={model} onValueChange={handleModelChange}>
      <SelectTrigger className="min-w-[180px] w-[210px] bg-transparent shadow-none text-sm focus:outline-none cursor-pointer hover:bg-gray-100 rounded transition-colors border-none text-gray-600">
        <SelectValue>
          <div className="flex items-center pr-2 truncate">
            <NextImage
              alt="Model icon"
              src={LLMIcon}
              width={14}
              height={14}
              className="mr-2"
            />
            <span className="truncate">{modelNameToLabel(model)}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {allModels.map((model) => (
          <SelectItem key={model.name} value={model.name}>
            {model.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}