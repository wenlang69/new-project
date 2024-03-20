import { AiOutlineQuestionCircle } from 'react-icons/ai';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Tips({ text }: { text?: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <AiOutlineQuestionCircle />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className='max-w-40'>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
