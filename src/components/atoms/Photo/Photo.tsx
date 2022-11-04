import { StyledPhoto } from './StyledPhoto';
interface Props {
    photoUrl?: string;
    alt?: string;
    onClick: () => void;
}
const Photo = ({ photoUrl, alt, onClick }: Props) => {
    return (
        <StyledPhoto onClick={onClick}>
            {photoUrl ? (
                <img src={`assets/images/${photoUrl}`} alt={alt} />
            ) : (
                alt
            )}
        </StyledPhoto>
    );
};
export default Photo;
