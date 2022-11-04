import { StyledUserAvatar } from './StyledUserAvatar';
interface Props {
    photoUrl?: string;
    alt?: string;
    onClick?: () => void;
}
const UserAvatar = ({ photoUrl, alt = 'A', onClick }: Props) => {
    return (
        <StyledUserAvatar onClick={onClick}>
            {photoUrl ? (
                <img src={`assets/images/${photoUrl}`} alt={alt} />
            ) : (
                alt
            )}
        </StyledUserAvatar>
    );
};
export default UserAvatar;
