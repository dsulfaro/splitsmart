namespace :reset_database do
  desc "Destroy all table entries."
  task :all => :environment do
    ActiveRecord::Base.connection.tables.each do |table|
      if table != 'schema_migrations'
        table.singularize.camelize.constantize.destroy_all
      end
      # Rails.application.load_seed
    end
  end
end
