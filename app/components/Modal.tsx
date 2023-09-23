import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

interface ModalProps {
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center z-">
        <div className="bg-opacity-70 w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-full lg:h-auto md:h-auto">
          {/* Content */}
          <div className="h-full border-0 rounded-lg shadow-lg relative flex flex-col w-full">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <div className="text-lg font-semibold">{title}</div>
            </div>
            <div className="relative p-6 flex-auto">
              {/* body */}
              {body}
            </div>
            <div className="flex flex-col gap-2 p-6">
              {/* Footer */}
              <div className="flex flex-row items-center gap-4 w-full ">
                {secondaryAction && secondaryLabel && (
                  <Button
                    outline
                    label={secondaryLabel}
                    disabled={disabled}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  label={actionLabel}
                  disabled={disabled}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
