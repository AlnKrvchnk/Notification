import { useId } from 'react';
import { Sceleton } from '../../atoms/Sceleton/StyledSceleton';
import { StyledNotification } from '../Notification/StyledNotification';

const NotificationSceleton = () => {
    const id = useId();
    return (
        <StyledNotification key={id}>
            <Sceleton
                circle
                width="46px"
                height="46px"
                minWidth="40px"
                minHeight="40px"
            />
            <div>
                <div className="content">
                    <div>
                        <Sceleton
                            text
                            width="100%"
                            height="16px"
                            minHeight="14px"
                            marginBottom={8}
                        />
                        <Sceleton
                            text
                            width="25%"
                            height="14px"
                            minHeight="12px"
                            minWidth="50%"
                        />
                    </div>
                </div>
            </div>
        </StyledNotification>
    );
};
export default NotificationSceleton;
