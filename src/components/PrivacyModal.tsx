import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Политика конфиденциальности
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] px-6 pb-6">
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Общие положения</h3>
              <p className="text-muted-foreground">
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями 
                Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок 
                обработки персональных данных и меры по обеспечению безопасности персональных данных.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Цели обработки персональных данных</h3>
              <p className="text-muted-foreground">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Обработка заявок и заказов</li>
                <li>Связь с клиентами по вопросам предоставления услуг</li>
                <li>Информирование о новых товарах и акциях</li>
                <li>Улучшение качества обслуживания</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">3. Категории обрабатываемых персональных данных</h3>
              <p className="text-muted-foreground">
                Мы обрабатываем следующие категории персональных данных:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Фамилия, имя, отчество</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты (при предоставлении)</li>
                <li>Информация о предпочтениях в парфюмерии</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">4. Способы обработки персональных данных</h3>
              <p className="text-muted-foreground">
                Обработка персональных данных осуществляется с использованием автоматизированных средств, 
                а также без их использования. Мы принимаем необходимые правовые, организационные и технические 
                меры для защиты персональных данных от неправомерного или случайного доступа к ним, 
                уничтожения, изменения, блокирования, копирования, предоставления, распространения.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">5. Сроки обработки персональных данных</h3>
              <p className="text-muted-foreground">
                Персональные данные обрабатываются в течение срока, необходимого для достижения целей 
                обработки, но не более 5 лет с момента получения согласия субъекта персональных данных.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">6. Права субъекта персональных данных</h3>
              <p className="text-muted-foreground">
                Субъект персональных данных имеет право:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">7. Контактная информация</h3>
              <p className="text-muted-foreground">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться 
                к нам по телефону или через форму обратной связи на сайте.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Настоящая политика конфиденциальности действует с момента размещения на сайте и до момента 
                отзыва согласия субъекта персональных данных на обработку персональных данных.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="p-6 pt-0 flex justify-end">
          <Button onClick={onClose} variant="outline">
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
