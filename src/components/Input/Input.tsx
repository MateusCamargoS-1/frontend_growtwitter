import InputStyled from './inputStyled';

interface InputProps {
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ label, type, name, value, onChange, placeholder }: InputProps) => {
  return (
    <div>
      <label id={name}>{label}</label>
      <InputStyled type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}></InputStyled>
    </div>
  );
};

export default Input;
