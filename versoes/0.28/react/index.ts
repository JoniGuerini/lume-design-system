/**
 * Lume para React: componentes .tsx que você copia para o projeto, por cima do CSS e do JavaScript do Lume.
 * Esta pasta fica dentro da pasta do Lume (lume/react/), ao lado de lume.css e lume.js.
 * https://lumeui.dev/#/recursos/react
 */
export { cx } from './cx';
export { useLocale } from './useLocale';
export { Icon, type IconName, type IconProps } from './Icon';

// Ações
export { Button, ButtonLink, type ButtonProps, type ButtonLinkProps, type ButtonVariant, type ButtonSize } from './Button';
export { IconButton, type IconButtonProps } from './IconButton';
export { InlineAction, type InlineActionProps } from './InlineAction';
export { Chip, RemovableChip, ChipGroup, type ChipProps, type RemovableChipProps, type ChipGroupProps } from './Chip';

// Feedback e carregamento
export { Badge, type BadgeProps, type Tone } from './Badge';
export { Alert, type AlertProps, type AlertTone } from './Alert';
export { Progress, Spinner, Skeleton, type ProgressProps, type SpinnerProps, type SkeletonProps } from './Loading';

// Conteúdo
export { Card, CardLink, Panel, PanelSpacer, PanelMeta, Section, type CardProps, type CardLinkProps, type PanelProps, type SectionProps } from './Panel';
export { Avatar, AvatarGroup, avatarTone, initials, type AvatarProps, type AvatarGroupProps, type AvatarTone, type AvatarStatus, type AvatarSize } from './Avatar';
export {
  Kbd, DescriptionList, Timeline, Breadcrumb,
  type KbdProps, type DescriptionListProps, type TimelineProps, type TimelineItem, type BreadcrumbProps, type BreadcrumbItem,
} from './Content';

// Formulários
export { Field, Input, Textarea, TextField, FieldAction, useField, type FieldProps, type InputProps, type TextareaProps, type TextFieldProps, type FieldActionProps, type FieldSize } from './Field';
export { Select, type SelectProps, type SelectOption, type SelectGroup } from './Select';
export {
  Checkbox, Radio, Switch, ChoiceGroup, RadioGroup, CheckboxGroup,
  type CheckboxProps, type RadioProps, type SwitchProps, type ChoiceGroupProps, type RadioGroupProps, type CheckboxGroupProps, type ChoiceOption,
} from './Choice';
export {
  DatePicker, TimePicker, NumberField, TagField,
  type DatePickerProps, type DateRange, type TimePickerProps, type NumberFieldProps, type TagFieldProps,
} from './Pickers';
export { Slider, FileUpload, OtpField, type SliderProps, type FileUploadProps, type FileUploadHandle, type OtpFieldProps } from './Controls';
export { Form, type FormProps, type FormHandle, type FormError, type FormData } from './Form';

// Navegação
export {
  Menu, Tabs, SegmentedControl, Pagination, Stepper, Accordion, Tree, BackToTop, useScrollbars,
  type MenuProps, type MenuOption, type TabsProps, type TabItem, type SegmentedControlProps, type SegmentedOption,
  type PaginationProps, type StepperProps, type AccordionProps, type AccordionItem, type TreeProps, type TreeItem, type BackToTopProps,
} from './Navigation';

// Camadas
export {
  Modal, Drawer, Popover, ContextMenu, Tooltip, useTooltips, useDisclosure,
  type ModalProps, type DrawerProps, type DialogAction, type PopoverProps, type ContextMenuProps, type TooltipProps,
} from './Layers';
/** Toast: funções, não componentes. toast('Link copiado', { tone: 'success' }). https://lumeui.dev/#/componentes/toast */
export { toast, copyText, clearToasts, setToastPosition, getToastPosition, type ToastOptions, type ToastPosition } from '../js/toast.js';
