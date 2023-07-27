import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import '../../style/selectStyle.css';

const SelectComponent = ({ datas, value, setValue }) => {

  const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });

  const handleSelectChange = (e) => {
    setValue(e);
    console.log("Select Board: ", e);
  };

  const dataList = () => {
    return (
      datas?.map(d => (
        <SelectItem key={d.id} value={d.boardName}>{d.boardName}</SelectItem>
      ))
    );
  };


  return (
    <Select.Root onValueChange={handleSelectChange}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Boards"/>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Boards</Select.Label>
              {dataList()}
            </Select.Group>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default SelectComponent;