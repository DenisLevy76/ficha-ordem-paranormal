export interface ICharacterStatusComponentProps {
  maxValue?: number;
  currentValue: number;
  status: "life" | "sanity" | "effort";
  label: string;
}
