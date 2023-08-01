interface IArrowIconSvg {
  className: string;
}

const ArrowIconSvg = ({ className }: IArrowIconSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
      />
    </svg>
  );
};

export default ArrowIconSvg;
