import ButtonDefaultStyled from './ButtonDefaultStyled';

interface ButtonProps {
  label: string;
  borderRadius?: string;
  margin?: string;
  width?: string;
  onClick: () => void;
}

const ButtonDefault = ({ label, onClick, borderRadius, margin, width }: ButtonProps) => {
  return (
    <ButtonDefaultStyled onClick={onClick} style={{ borderRadius, margin, width }}>
      {label}
    </ButtonDefaultStyled>
  );
};

export default ButtonDefault;
