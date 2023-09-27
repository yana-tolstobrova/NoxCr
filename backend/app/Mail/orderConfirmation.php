<?php
  
namespace App\Mail;
  
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Mail\Mailables\Attachment;
use Symfony\Component\Mime\Part\TextPart;
use Symfony\Component\Mime\Part\File;
use App\Models\Order;
use App\Models\OrderLine;
use App\Models\User;
use App\Models\Product;

  
class orderConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    
    public $orderData;
  
    /**
     * Create a new message instance.
     */
    public function __construct($orderData)
    { 

         
    $this->orderData=$orderData;
   
       
        
    }
  
    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'NoxCR: Orden de compra',
        );
    }
  
    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mails.orderConfirmationMail',
        );
    }
  
    /**
     * Get the attachments for the message.
     *
     * @return array

     */
    public function attachments(): array
    {
        return [
               
        ];
    }
}