class Attachment < ApplicationRecord
  has_one_attached :file, dependent: :destroy
  validates :file, presence: true

  def as_hash
    {
      id: id,
      title: file.blob.filename.to_s,
      mime_type: file.blob.content_type,
      size: file.blob.byte_size
    }
  end
end
