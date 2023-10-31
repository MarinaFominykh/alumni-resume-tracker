import Chip from '@mui/material/Chip';

interface ChipProps {
  label: string;
  sx: object;
}

function ChipElement({ label, sx }: ChipProps) {
  return <Chip label={label} sx={sx} />;
}

export default ChipElement;
